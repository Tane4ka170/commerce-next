"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { emptyCart } from "@/images";
export default function EmptyCart() {
  return (
    <div className="py-12 md:py-24 bg-gradient-to-br from-slate-950 to-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full space-y-8"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
          className="relative w-56 h-56 mx-auto"
        >
          <Image
            src={emptyCart}
            alt="Empty cart illustration"
            layout="fill"
            objectFit="contain"
            className="drop-shadow-2xl"
          />
          <motion.div
            animate={{
              x: [0, 5, -5, 0],
              y: [0, 3, -3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
            className="absolute top-0 right-0 bg-rose-900 rounded-full p-3 shadow-lg"
          >
            <ShoppingCart size={26} className="text-white" />
          </motion.div>
        </motion.div>

        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700">
            Oops! Your cart is still empty
          </h2>
          <p className="text-gray-800 text-sm md:text-base">
            You haven&apos;t picked anything yet. Time to browse and treat
            yourself to something special!
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-gray-300 hover:scale-105"
          >
            Start Shopping
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
