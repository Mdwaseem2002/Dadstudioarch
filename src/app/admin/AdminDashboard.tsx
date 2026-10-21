"use client";

import React, { useState, useEffect, useCallback } from "react";

/* ─────────── types ─────────── */
interface Project {
  _id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  client: string;
  images: string[];
  featured: boolean;
  createdAt: string;
}

const CATEGORIES = [
  "Modern Villas",
  "Residential Architecture",
  "Interior Spaces",
  "Commercial Projects",
  "UPVC Installations",
] as const;

/* ─────────── component ─────────── */
export default function AdminDashboard() {
  /* auth */
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  /* projects */
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "add">("projects");
  const [filterCategory, setFilterCategory] = useState("All");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  /* new project form */
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: CATEGORIES[0] as string,
    location: "",
    year: new Date().getFullYear().toString(),
    client: "",
    featured: false,
  });
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  /* ─── verify auth on mount ─── */
  useEffect(() => {
    fetch("/api/auth/verify")
      .then((r) => r.json())
      .then((d) => setIsAuthenticated(d.authenticated))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setAuthLoading(false));
  }, []);

  /* ─── fetch projects ─── */
  const fetchProjects = useCallback(async () => {
    setProjectsLoading(true);
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      if (data.success) setProjects(data.projects);
    } catch (err) {
      console.error("fetch projects error", err);
    } finally {
      setProjectsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) fetchProjects();
  }, [isAuthenticated, fetchProjects]);

  /* ─── login ─── */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
      } else {
        setLoginError(data.message || "Invalid credentials");
      }
    } catch {
      setLoginError("Network error. Please try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  /* ─── logout ─── */
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  /* ─── image handling ─── */
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImageFiles((prev) => [...prev, ...files]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  /* ─── submit project ─── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg("");

    try {
      // Convert images to base64
      const imagePromises = imageFiles.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      );
      const base64Images = await Promise.all(imagePromises);

      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, images: base64Images }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccessMsg("Project added successfully!");
        setForm({
          title: "",
          description: "",
          category: CATEGORIES[0],
          location: "",
          year: new Date().getFullYear().toString(),
          client: "",
          featured: false,
        });
        setImageFiles([]);
        setImagePreviews([]);
        fetchProjects();
        setTimeout(() => setSuccessMsg(""), 3000);
      }
    } catch (err) {
      console.error("submit error", err);
    } finally {
      setSubmitting(false);
    }
  };

  /* ─── delete project ─── */
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/projects?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setProjects((prev) => prev.filter((p) => p._id !== id));
        setDeleteConfirm(null);
      }
    } catch (err) {
      console.error("delete error", err);
    }
  };

  /* ─── toggle featured ─── */
  const toggleFeatured = async (project: Project) => {
    try {
      const res = await fetch("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: project._id, featured: !project.featured }),
      });
      const data = await res.json();
      if (data.success) {
        setProjects((prev) =>
          prev.map((p) =>
            p._id === project._id ? { ...p, featured: !p.featured } : p
          )
        );
      }
    } catch (err) {
      console.error("toggle featured error", err);
    }
  };

  /* ─── filtered projects ─── */
  const filteredProjects =
    filterCategory === "All"
      ? projects
      : projects.filter((p) => p.category === filterCategory);

  /* ─── loading state ─── */
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#A9855B]/30 border-t-[#A9855B] rounded-full animate-spin" />
      </div>
    );
  }

  /* ═══════════════ LOGIN SCREEN ═══════════════ */
  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1510 50%, #0a0a0a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          fontFamily: "var(--font-manrope), system-ui, sans-serif",
        }}
      >
        {/* floating orbs */}
        <div
          style={{
            position: "fixed",
            top: "15%",
            left: "10%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(169,133,91,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "fixed",
            bottom: "10%",
            right: "15%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(169,133,91,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            width: "100%",
            maxWidth: 440,
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(40px)",
            border: "1px solid rgba(169,133,91,0.15)",
            borderRadius: 24,
            padding: "3rem 2.5rem",
            boxShadow: "0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(169,133,91,0.05) inset",
          }}
        >
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div
              style={{
                width: 64,
                height: 64,
                margin: "0 auto 1rem",
                borderRadius: 16,
                background: "linear-gradient(135deg, #A9855B 0%, #D4AF7A 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 700,
                color: "#0a0a0a",
                letterSpacing: -1,
              }}
            >
              D
            </div>
            <h1
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: "1.75rem",
                color: "#ffffff",
                marginBottom: 4,
                letterSpacing: "-0.02em",
              }}
            >
              Admin Panel
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
              DADSTUDIOARCH Management System
            </p>
          </div>

          <form onSubmit={handleLogin}>
            {/* Username */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                }}
              >
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(169,133,91,0.2)",
                  borderRadius: 12,
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(169,133,91,0.5)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(169,133,91,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(169,133,91,0.2)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                placeholder="Enter username"
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(169,133,91,0.2)",
                  borderRadius: 12,
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(169,133,91,0.5)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(169,133,91,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(169,133,91,0.2)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                placeholder="Enter password"
              />
            </div>

            {/* Error */}
            {loginError && (
              <div
                style={{
                  padding: "12px 16px",
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  borderRadius: 10,
                  color: "#ef4444",
                  fontSize: "0.85rem",
                  marginBottom: "1.25rem",
                  textAlign: "center",
                }}
              >
                {loginError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loginLoading}
              style={{
                width: "100%",
                padding: "16px",
                background: loginLoading
                  ? "rgba(169,133,91,0.5)"
                  : "linear-gradient(135deg, #A9855B 0%, #D4AF7A 100%)",
                border: "none",
                borderRadius: 12,
                color: "#0a0a0a",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: loginLoading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                letterSpacing: "0.02em",
              }}
            >
              {loginLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ═══════════════ DASHBOARD ═══════════════ */
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
      }}
    >
      {/* ─── Header ─── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(169,133,91,0.15)",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "linear-gradient(135deg, #A9855B 0%, #D4AF7A 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              color: "#0a0a0a",
            }}
          >
            D
          </div>
          <div>
            <h1
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: "1.25rem",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              DADSTUDIOARCH
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}>
              Admin Panel
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.8rem",
            }}
          >
            Welcome, <span style={{ color: "#D4AF7A" }}>Admin</span>
          </span>
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 20px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              color: "#ffffff",
              fontSize: "0.8rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(239,68,68,0.15)";
              e.currentTarget.style.borderColor = "rgba(239,68,68,0.3)";
              e.currentTarget.style.color = "#ef4444";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* ─── Main content ─── */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "2rem" }}>
        {/* Stats Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {[
            {
              label: "Total Projects",
              value: projects.length,
              icon: "📁",
              color: "#A9855B",
            },
            {
              label: "Featured",
              value: projects.filter((p) => p.featured).length,
              icon: "⭐",
              color: "#f59e0b",
            },
            {
              label: "Categories",
              value: new Set(projects.map((p) => p.category)).size,
              icon: "🏷️",
              color: "#8b5cf6",
            },
            {
              label: "This Month",
              value: projects.filter((p) => {
                const d = new Date(p.createdAt);
                const now = new Date();
                return (
                  d.getMonth() === now.getMonth() &&
                  d.getFullYear() === now.getFullYear()
                );
              }).length,
              icon: "📅",
              color: "#10b981",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${stat.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                }}
              >
                {stat.icon}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: stat.color,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.75rem",
                    marginTop: 2,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 24,
            background: "rgba(255,255,255,0.03)",
            borderRadius: 12,
            padding: 4,
            width: "fit-content",
          }}
        >
          {(["projects", "add"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "10px 24px",
                borderRadius: 8,
                border: "none",
                background:
                  activeTab === tab
                    ? "linear-gradient(135deg, #A9855B 0%, #D4AF7A 100%)"
                    : "transparent",
                color: activeTab === tab ? "#0a0a0a" : "rgba(255,255,255,0.5)",
                fontWeight: activeTab === tab ? 600 : 400,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {tab === "projects" ? "📋 All Projects" : "➕ Add Project"}
            </button>
          ))}
        </div>

        {/* ─── Tab: Projects List ─── */}
        {activeTab === "projects" && (
          <div>
            {/* Category Filter */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 24,
              }}
            >
              {["All", ...CATEGORIES].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 20,
                    border:
                      filterCategory === cat
                        ? "1px solid #A9855B"
                        : "1px solid rgba(255,255,255,0.1)",
                    background:
                      filterCategory === cat
                        ? "rgba(169,133,91,0.15)"
                        : "rgba(255,255,255,0.03)",
                    color:
                      filterCategory === cat
                        ? "#D4AF7A"
                        : "rgba(255,255,255,0.5)",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            {projectsLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "4rem",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    border: "3px solid rgba(169,133,91,0.3)",
                    borderTopColor: "#A9855B",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
              </div>
            ) : filteredProjects.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "4rem 2rem",
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: 16,
                  border: "1px dashed rgba(255,255,255,0.1)",
                }}
              >
                <p
                  style={{
                    fontSize: "3rem",
                    marginBottom: 12,
                  }}
                >
                  📂
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "1rem",
                  }}
                >
                  No projects found
                </p>
                <button
                  onClick={() => setActiveTab("add")}
                  style={{
                    marginTop: 16,
                    padding: "10px 24px",
                    background: "linear-gradient(135deg, #A9855B 0%, #D4AF7A 100%)",
                    border: "none",
                    borderRadius: 8,
                    color: "#0a0a0a",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "0.85rem",
                  }}
                >
                  Add Your First Project
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                  gap: 20,
                }}
              >
                {filteredProjects.map((project) => (
                  <div
                    key={project._id}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 16,
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(169,133,91,0.3)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Project Image */}
                    {project.images?.[0] && (
                      <div
                        style={{
                          height: 200,
                          background: `url(${project.images[0]}) center/cover no-repeat`,
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                          }}
                        />
                        {project.featured && (
                          <div
                            style={{
                              position: "absolute",
                              top: 12,
                              right: 12,
                              padding: "4px 10px",
                              background: "rgba(245,158,11,0.9)",
                              borderRadius: 20,
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              color: "#0a0a0a",
                            }}
                          >
                            ⭐ Featured
                          </div>
                        )}
                      </div>
                    )}

                    <div style={{ padding: "1.25rem" }}>
                      {/* Category badge */}
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 10px",
                          background: "rgba(169,133,91,0.12)",
                          borderRadius: 20,
                          color: "#D4AF7A",
                          fontSize: "0.7rem",
                          fontWeight: 500,
                          marginBottom: 10,
                        }}
                      >
                        {project.category}
                      </span>

                      <h3
                        style={{
                          fontFamily: "var(--font-instrument-serif), serif",
                          fontSize: "1.15rem",
                          marginBottom: 6,
                          lineHeight: 1.3,
                        }}
                      >
                        {project.title}
                      </h3>

                      <p
                        style={{
                          color: "rgba(255,255,255,0.4)",
                          fontSize: "0.8rem",
                          lineHeight: 1.5,
                          marginBottom: 12,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Meta info */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 12,
                          marginBottom: 16,
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.35)",
                        }}
                      >
                        {project.location && <span>📍 {project.location}</span>}
                        {project.year && <span>📅 {project.year}</span>}
                        {project.client && <span>👤 {project.client}</span>}
                        <span>🖼️ {project.images?.length || 0} images</span>
                      </div>

                      {/* Actions */}
                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                          paddingTop: 12,
                        }}
                      >
                        <button
                          onClick={() => toggleFeatured(project)}
                          style={{
                            flex: 1,
                            padding: "8px",
                            borderRadius: 8,
                            border: "1px solid rgba(255,255,255,0.1)",
                            background: project.featured
                              ? "rgba(245,158,11,0.15)"
                              : "transparent",
                            color: project.featured
                              ? "#f59e0b"
                              : "rgba(255,255,255,0.5)",
                            fontSize: "0.75rem",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {project.featured ? "★ Featured" : "☆ Feature"}
                        </button>
                        {deleteConfirm === project._id ? (
                          <>
                            <button
                              onClick={() => handleDelete(project._id)}
                              style={{
                                flex: 1,
                                padding: "8px",
                                borderRadius: 8,
                                border: "1px solid rgba(239,68,68,0.4)",
                                background: "rgba(239,68,68,0.15)",
                                color: "#ef4444",
                                fontSize: "0.75rem",
                                cursor: "pointer",
                              }}
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              style={{
                                flex: 1,
                                padding: "8px",
                                borderRadius: 8,
                                border: "1px solid rgba(255,255,255,0.1)",
                                background: "transparent",
                                color: "rgba(255,255,255,0.5)",
                                fontSize: "0.75rem",
                                cursor: "pointer",
                              }}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirm(project._id)}
                            style={{
                              flex: 1,
                              padding: "8px",
                              borderRadius: 8,
                              border: "1px solid rgba(255,255,255,0.1)",
                              background: "transparent",
                              color: "rgba(255,255,255,0.5)",
                              fontSize: "0.75rem",
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = "rgba(239,68,68,0.4)";
                              e.currentTarget.style.color = "#ef4444";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                            }}
                          >
                            🗑️ Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ─── Tab: Add Project ─── */}
        {activeTab === "add" && (
          <div
            style={{
              maxWidth: 720,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: "1.5rem",
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #A9855B 0%, #D4AF7A 100%)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  color: "#0a0a0a",
                }}
              >
                +
              </span>
              New Project
            </h2>

            {/* Success message */}
            {successMsg && (
              <div
                style={{
                  padding: "14px 20px",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  borderRadius: 12,
                  color: "#10b981",
                  fontSize: "0.9rem",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                ✅ {successMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Title */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Project Title *</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  style={inputStyle}
                  placeholder="e.g. Modern Villa Residence"
                />
              </div>

              {/* Description */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Description *</label>
                <textarea
                  required
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                  placeholder="Describe the project..."
                />
              </div>

              {/* Category */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Category *</label>
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} style={{ background: "#1a1a1a" }}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Grid: Location + Year */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <div>
                  <label style={labelStyle}>Location</label>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) =>
                      setForm({ ...form, location: e.target.value })
                    }
                    style={inputStyle}
                    placeholder="e.g. Bangalore, India"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Year</label>
                  <input
                    type="text"
                    value={form.year}
                    onChange={(e) =>
                      setForm({ ...form, year: e.target.value })
                    }
                    style={inputStyle}
                    placeholder="e.g. 2024"
                  />
                </div>
              </div>

              {/* Client */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Client Name</label>
                <input
                  type="text"
                  value={form.client}
                  onChange={(e) =>
                    setForm({ ...form, client: e.target.value })
                  }
                  style={inputStyle}
                  placeholder="e.g. Mr. Sharma"
                />
              </div>

              {/* Featured Toggle */}
              <div
                style={{
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <button
                  type="button"
                  onClick={() => setForm({ ...form, featured: !form.featured })}
                  style={{
                    width: 48,
                    height: 26,
                    borderRadius: 13,
                    border: "none",
                    background: form.featured
                      ? "linear-gradient(135deg, #A9855B 0%, #D4AF7A 100%)"
                      : "rgba(255,255,255,0.1)",
                    cursor: "pointer",
                    position: "relative",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "#ffffff",
                      position: "absolute",
                      top: 3,
                      left: form.featured ? 25 : 3,
                      transition: "all 0.3s ease",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    }}
                  />
                </button>
                <span
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.85rem",
                  }}
                >
                  Mark as Featured Project
                </span>
              </div>

              {/* Image Upload */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Project Images</label>
                <div
                  style={{
                    border: "2px dashed rgba(169,133,91,0.3)",
                    borderRadius: 16,
                    padding: "2rem",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: "rgba(169,133,91,0.03)",
                  }}
                  onClick={() =>
                    document.getElementById("image-upload")?.click()
                  }
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.currentTarget.style.borderColor = "#A9855B";
                    e.currentTarget.style.background = "rgba(169,133,91,0.08)";
                  }}
                  onDragLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(169,133,91,0.3)";
                    e.currentTarget.style.background = "rgba(169,133,91,0.03)";
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    e.currentTarget.style.borderColor = "rgba(169,133,91,0.3)";
                    e.currentTarget.style.background = "rgba(169,133,91,0.03)";
                    const files = Array.from(e.dataTransfer.files).filter((f) =>
                      f.type.startsWith("image/")
                    );
                    if (files.length) {
                      setImageFiles((prev) => [...prev, ...files]);
                      files.forEach((file) => {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setImagePreviews((prev) => [
                            ...prev,
                            reader.result as string,
                          ]);
                        };
                        reader.readAsDataURL(file);
                      });
                    }
                  }}
                >
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  <p style={{ fontSize: "2rem", marginBottom: 8 }}>📸</p>
                  <p
                    style={{
                      color: "#D4AF7A",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    Click or drag images here
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      fontSize: "0.75rem",
                      marginTop: 4,
                    }}
                  >
                    PNG, JPG, WEBP (Max 5MB each)
                  </p>
                </div>

                {/* Image Previews */}
                {imagePreviews.length > 0 && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                      gap: 12,
                      marginTop: 16,
                    }}
                  >
                    {imagePreviews.map((preview, idx) => (
                      <div
                        key={idx}
                        style={{
                          position: "relative",
                          borderRadius: 10,
                          overflow: "hidden",
                          aspectRatio: "1",
                        }}
                      >
                        <img
                          src={preview}
                          alt={`Preview ${idx + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          style={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            background: "rgba(239,68,68,0.9)",
                            border: "none",
                            color: "#fff",
                            fontSize: "0.7rem",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: "100%",
                  padding: "16px",
                  background: submitting
                    ? "rgba(169,133,91,0.4)"
                    : "linear-gradient(135deg, #A9855B 0%, #D4AF7A 100%)",
                  border: "none",
                  borderRadius: 12,
                  color: "#0a0a0a",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: submitting ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.02em",
                }}
              >
                {submitting ? "Publishing Project..." : "Publish Project"}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Global animation keyframes */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/* ─── shared styles ─── */
const labelStyle: React.CSSProperties = {
  display: "block",
  color: "rgba(255,255,255,0.5)",
  fontSize: "0.75rem",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 12,
  color: "#ffffff",
  fontSize: "0.9rem",
  outline: "none",
  transition: "all 0.3s ease",
  boxSizing: "border-box",
  fontFamily: "inherit",
};
