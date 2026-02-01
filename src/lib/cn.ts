import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ১. import { clsx, type ClassValue } from "clsx"
// এখানে clsx লাইব্রেরিটি ইমপোর্ট করা হয়েছে। এটি কন্ডিশনাল ক্লাস (যেমন: isActive && 'bg-red-500') হ্যান্ডেল করতে সাহায্য করে। আর ClassValue হলো একটি টাইপ যা নিশ্চিত করে আমরা সঠিক ফরম্যাটে ক্লাস নেম দিচ্ছি। clsx documentation

// ২. import { twMerge } from "tailwind-merge"
// এটি খুবই গুরুত্বপূর্ণ। Tailwind-এ অনেক সময় ক্লাসের মধ্যে সংঘর্ষ (Conflict) হয়। যেমন একই এলিমেন্টে px-2 এবং px-4 থাকলে কোনটা কাজ করবে? twMerge এই কনফ্লিক্ট মিটিয়ে শেষের ক্লাসটিকে প্রাধান্য দেয়। tailwind-merge documentation

// ৩. export function cn(...inputs: ClassValue[])
// এখানে cn নামে একটি ফাংশন তৈরি করা হয়েছে। ...inputs (Spread Operator) মানে হলো আপনি এই ফাংশনে যত খুশি ক্লাস বা কন্ডিশন প্যারামিটার হিসেবে পাঠাতে পারবেন। MDN Spread Syntax

// ৪. return twMerge(clsx(inputs))
// এটি ফাংশনের আসল কাজ। প্রথমে clsx(inputs) সব কন্ডিশনাল ক্লাসগুলোকে একটা লাইনে নিয়ে আসে, তারপর twMerge সেই লাইনের ভেতর কোনো ডুপ্লিকেট বা কনফ্লিক্টিং Tailwind ক্লাস থাকলে তা পরিষ্কার করে ফাইনাল আউটপুট দেয়।

// সহজ উদাহরণ:
// আপনি যদি লিখেন cn("p-2", true && "p-4"), তাহলে আউটপুট আসবে শুধু "p-4", কারণ twMerge জানে যে p-4 আগের p-2 কে ওভাররাইড করে।
