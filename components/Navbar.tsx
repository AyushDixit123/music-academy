"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Button } from "./ui/moving-border";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        
        <div className="flex justify-between">
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive} className="flex justify-center">
                <Link href='/'>
                    <MenuItem setActive={setActive} active={active} item="home">
                        <div className="flex flex-col space-y-4 text-sm">
                            Home
                        </div>
                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href='/courses'>All courses</HoveredLink>
                        <HoveredLink href='/courses'>Basic Music Theory</HoveredLink>
                        <HoveredLink href='/courses'>Advanced Production</HoveredLink>
                        <HoveredLink href='/courses'>Composition</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="contact">
                    <div className="flex flex-col space-y-4 text-sm">
                        Contact
                    </div>
                </MenuItem>
                
            </Menu>
        </div>
        <div className="relative mt-10 ">
            <Button>register</Button>
        </div>
        </div>
    );
}
