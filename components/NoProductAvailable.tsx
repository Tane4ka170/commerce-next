"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

const NoProductAvailable = ({
  selectedTab,
  className,
}: {
  selectedTab?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12 px-6 min-h-80 space-y-5 text-center bg-white border border-gray-200 rounded-xl shadow-sm w-full mt-10",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800">No Items Found</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="text-gray-600 max-w-md"
      >
        Looks like there are no available products for{" "}
        <span className="font-medium text-darkColor">
          {selectedTab || "this category"}
        </span>{" "}
        right now.
      </motion.p>

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="flex items-center space-x-2 text-shop_dark_green"
      >
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>We're updating our stock</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-sm text-gray-500"
      >
        Please come back soon or browse through other collections.
      </motion.p>
    </div>
  );
};

export default NoProductAvailable;
