"use client";

import React, { useState, useEffect } from "react";
import { Cookie, Settings, Check, X, Shield, BarChart3, Sliders, ChevronRight } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always locked
    analytics: true,
    functional: true,
  });

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem("site_cookie_consent");
    if (!consent) {
      // Show banner after brief delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Listen for custom trigger from Footer "Cookies" button
    const handleOpenSettings = () => {
      setIsVisible(true);
      setShowSettings(true);
    };

    window.addEventListener("open_cookie_settings", handleOpenSettings);
    return () => window.removeEventListener("open_cookie_settings", handleOpenSettings);
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString(),
      choice: "all",
    };
    localStorage.setItem("site_cookie_consent", JSON.stringify(consentData));
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString(),
      choice: "rejected",
    };
    localStorage.setItem("site_cookie_consent", JSON.stringify(consentData));
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      ...preferences,
      necessary: true,
      timestamp: new Date().toISOString(),
      choice: "custom",
    };
    localStorage.setItem("site_cookie_consent", JSON.stringify(consentData));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Bottom Cookie Banner */}
      {!showSettings && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl text-white">
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-bold font-heading text-white">
                  We Value Your Privacy
                </h3>
                <p className="mt-1 text-xs text-slate-300 font-sans leading-relaxed">
                  We use cookies and telemetry tokens to ensure 99.999% SLA uptime, improve load performance, and deliver customized web & AI solutions.
                </p>
              </div>
            </div>

            {/* Actions: Accept All, Reject All, Cookie Settings */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-2">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:flex-1 py-2.5 px-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-bold transition-all text-center cursor-pointer shadow-xs active:scale-95"
              >
                Accept All Cookies
              </button>

              <button
                type="button"
                onClick={handleRejectAll}
                className="w-full sm:flex-1 py-2.5 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-sans text-xs font-semibold transition-all text-center cursor-pointer active:scale-95"
              >
                Reject All
              </button>

              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="w-full sm:w-auto py-2.5 px-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white font-sans text-xs font-medium transition-colors flex items-center justify-center gap-1 cursor-pointer"
                title="Cookie Settings"
              >
                <Settings className="w-3.5 h-3.5" />
                <span className="sm:hidden">Cookie Settings</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowSettings(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 text-slate-900 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 leading-tight">
                    Cookie Settings
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">
                    Customize your browsing and telemetry preferences
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Toggles */}
            <div className="space-y-4 py-5 text-sm font-sans">
              
              {/* Category 1: Strictly Necessary */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold text-slate-900 text-sm">Strictly Necessary</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-mono">
                      ALWAYS ACTIVE
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Essential for site navigation, SSL security, form authentication, and server session management. Cannot be switched off.
                  </p>
                </div>
                <div className="w-10 h-6 bg-emerald-600 rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-80 shrink-0">
                  <div className="w-4 h-4 bg-white rounded-full shadow-xs" />
                </div>
              </div>

              {/* Category 2: Performance & Analytics */}
              <div className="p-3.5 rounded-xl border border-slate-200 flex items-start justify-between gap-4 hover:border-slate-300 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-slate-900 text-sm">Performance & Analytics</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Helps us measure page load times, sub-300ms First Contentful Paint benchmarks, and anonymous interaction heatmaps.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                  className={`w-10 h-6 rounded-full transition-colors flex items-center px-1 shrink-0 cursor-pointer ${
                    preferences.analytics ? "bg-blue-600 justify-end" : "bg-slate-300 justify-start"
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-xs transition-transform" />
                </button>
              </div>

              {/* Category 3: Functional & Personalization */}
              <div className="p-3.5 rounded-xl border border-slate-200 flex items-start justify-between gap-4 hover:border-slate-300 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Cookie className="w-4 h-4 text-purple-600" />
                    <span className="font-bold text-slate-900 text-sm">Functional & Experience</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Remembers your UI selections, custom theme preferences, and interactive simulation state across visits.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreferences({ ...preferences, functional: !preferences.functional })}
                  className={`w-10 h-6 rounded-full transition-colors flex items-center px-1 shrink-0 cursor-pointer ${
                    preferences.functional ? "bg-blue-600 justify-end" : "bg-slate-300 justify-start"
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-xs transition-transform" />
                </button>
              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleRejectAll}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 font-sans text-xs font-semibold hover:bg-slate-100 transition-colors text-center cursor-pointer"
              >
                Reject All
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs font-semibold transition-colors text-center cursor-pointer"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-bold transition-colors text-center cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

