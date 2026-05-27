"use client";
import { useActionState } from "react";
import { loginAction } from "./action";

const initialState = { error: "" };

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center font-black text-zinc-950 text-base">
            T
          </div>
          <div>
            <p className="font-black text-white tracking-widest text-sm uppercase">TORVEXIA</p>
            <p className="text-zinc-500 text-[10px] tracking-wider uppercase">Admin Panel</p>
          </div>
        </div>

        <form action={formAction} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 space-y-5">
          <div>
            <h1 className="text-white font-bold text-xl mb-1">Sign in</h1>
            <p className="text-zinc-500 text-sm">Enter your administrator password</p>
          </div>

          {state.error && (
            <div className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400 text-sm">
              {state.error}
            </div>
          )}

          <div>
            <label htmlFor="password" className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              placeholder="••••••••"
              className="w-full bg-zinc-800 border border-zinc-700 focus:border-amber-500/60 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-amber-500/15"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-zinc-950 font-bold py-3 rounded-xl text-sm uppercase tracking-wider transition-colors duration-200 cursor-pointer"
          >
            {pending ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
