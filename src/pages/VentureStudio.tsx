import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Venture Studio Landing Page
 * This page is served when accessing the venturestudio.orivonedge.dev subdomain
 */
const VentureStudio = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
                <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Venture Studio
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Building the Future of <span className="text-primary">Innovation</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We partner with exceptional founders to build, launch, and scale market-defining companies.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                    <Button size="lg" className="group">
                        Explore Portfolio
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg">
                        Partner With Us
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
                    {[
                        {
                            title: "Incubation",
                            description: "From idea to MVP in record time with our dedicated resources."
                        },
                        {
                            title: "Acceleration",
                            description: "Growth strategies and network access to scale rapidly."
                        },
                        {
                            title: "Investment",
                            description: "Strategic capital deployment for high-potential ventures."
                        }
                    ].map((item, index) => (
                        <div key={index} className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VentureStudio;
