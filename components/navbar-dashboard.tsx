"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Form from "next/form";
import { Button } from "./ui/button";
import logoutAction from "@/app/(auth)/(logout)/logoutAction";
import { LogOutIcon } from "lucide-react";

export function NavbarDashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full h-screen flex-1 flex-col overflow-auto rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <Form action={logoutAction}>
              <Button
                variant="ghost"
                className="cursor-pointer hover:bg-gray-800 hover:text-white"
              >
                <LogOutIcon /> Logout
              </Button>
            </Form>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
