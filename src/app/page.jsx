"use client";
import React, { useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import PricingSection from "../components/landing/PricingSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

const theme = extendTheme({
    config: { initialColorMode: "light", useSystemColorMode: false },
  });

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <ChakraProvider theme={theme}>
            <Box minH="100vh" bg="white" position="relative">
                <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <HeroSection />
                <FeaturesSection />
                <HowItWorksSection />
                <PricingSection />
                <CTASection />
                <Footer />
            </Box>
        </ChakraProvider>
    );
}

export default Home;
