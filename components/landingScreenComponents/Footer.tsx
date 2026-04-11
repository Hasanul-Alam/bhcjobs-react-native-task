import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type FooterSection = {
  title: string;
  links: string[];
};

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Contact Us", "FAQs", "Sitemap"],
  },
];

const socialIcons: { name: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { name: "logo-facebook", label: "Facebook" },
  { name: "logo-instagram", label: "Instagram" },
  { name: "logo-youtube", label: "YouTube" },
  { name: "logo-linkedin", label: "LinkedIn" },
  { name: "logo-twitter", label: "X" },
];

const FooterAccordion = ({ section }: { section: FooterSection }) => {
  const [open, setOpen] = useState(false);
  return (
    <View className="border-t border-blue-400">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setOpen((v) => !v)}
        className="flex-row items-center justify-between py-4 px-4"
      >
        <Text className="text-white font-semibold text-sm">
          {section.title}
        </Text>
        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={18}
          color="white"
        />
      </TouchableOpacity>
      {open && (
        <View className="px-4 pb-3 gap-2">
          {section.links.map((link) => (
            <Text key={link} className="text-blue-100 text-sm">
              {link}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export const Footer = () => (
  <View className="bg-blue-500 pt-6">
    {/* Follow Us */}
    <View className="px-4 mb-5">
      <Text className="text-white font-bold text-base mb-3">Follow Us</Text>
      <View className="flex-row gap-4">
        {socialIcons.map((s) => (
          <TouchableOpacity key={s.label} activeOpacity={0.7}>
            <Ionicons name={s.name} size={24} color="white" />
          </TouchableOpacity>
        ))}
      </View>
    </View>

    {/* Accordion Sections */}
    {footerSections.map((section) => (
      <FooterAccordion key={section.title} section={section} />
    ))}

    {/* Copyright */}
    <View className="border-t border-blue-400 mt-2 py-4 px-4">
      <Text className="text-blue-100 text-xs text-center">
        Copyright© 2025 Bhc Jobs Ltd - All Rights Reserved.
      </Text>
    </View>
  </View>
);
