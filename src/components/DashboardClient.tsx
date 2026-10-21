"use client";

import { useEffect } from "react";
import * as DashboardApp from "@/lib/dashboardApp";

export default function DashboardClient() {
  useEffect(() => {
    DashboardApp.init();
  }, []);
  return null;
}
