export const school = {
  name: "Golden Future International School",
  short: "GFIS",
  address: "Nardoli Bypass Road, Patiyali, Kasganj, Uttar Pradesh – 207243",
  phone: "9456660157",
  managerPhone: "9027350561",
  website: "www.gfispatiyali.com",
  session: "2026–27",
  summer: "7:30 AM–1:40 PM",
  winter: "8:30 AM–2:40 PM",
};
export const classes = ["Nursery", "LKG", "UKG", ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)];
export const houses = [
  { name: "Ganga", motto: "Purity & Perseverance", tone: "house-ganga", text: "Steady, generous and committed to purposeful progress." },
  { name: "Yamuna", motto: "Depth & Dedication", tone: "house-yamuna", text: "Curious, thoughtful and dedicated to every challenge." },
  { name: "Saraswati", motto: "Wisdom & Creativity", tone: "house-saraswati", text: "Imaginative learners guided by knowledge and expression." },
  { name: "Godavari", motto: "Strength & Energy", tone: "house-godavari", text: "Confident participation, teamwork and positive action." },
];
export const staff = [
  ["Mrs. Yachna Agnihotri","Principal","11 Apr 2025"],["Mr. Chetan Pandey","TGT","11 Apr 2025"],["Mr. S M Idrak","TGT","11 Apr 2025"],["Miss. Astha Mishra","TGT","11 Apr 2025"],["Mr. Shivam","TGT","11 Apr 2025"],["Mr. Yogesh Yadav","TGT","11 Apr 2025"],["Mr. Parag Kumar Shakya","TGT","01 Apr 2026"],["Rahul Shakya","TGT","01 Apr 2026"],["Mrs. Kamini","PRT","11 Apr 2025"],["Mrs. Nidhi","PRT","11 Apr 2025"],["Mr. Shailendra Singh Yadav","PRT","11 Apr 2025"],["Mrs. Supriti","PRT","11 Apr 2025"],["Mrs. Raginee","PRT (NTT)","11 Apr 2025"],["Mrs. Arti Yadav","PRT, Health & Wellness","01 Apr 2026"],["Mr. Ravi Kumar","PRT","01 Apr 2026"],["Amit Kumar","PRT","01 Apr 2026"],["Miss. Mohini","Clerk","01 Apr 2026"],["Mr. Sanjeev Chauhan","Librarian","29 Aug 2026"],["Mr. Abhishek Kumar","PTI","29 Aug 2026"],["Mr. Rajeev Kumar Shakya","Special Educator","29 Aug 2026"],["Mr. Tarun Kumar Saraswat","PRT","29 Aug 2026"],["Mrs. Shiksha","PRT","29 Aug 2026"],["Mr. Varun Pratap Singh","PRT","29 Aug 2026"],
] as const;
export const holidays = [
["03 Jan","Saturday","Hazrat Ali's Birthday"],["26 Jan","Monday","Republic Day"],["15 Feb","Sunday","Maha Shivaratri"],["02 Mar","Monday","Holika Dahan"],["04 Mar","Wednesday","Holi"],["21 Mar","Saturday","Eid-ul-Fitr*"],["26 Mar","Thursday","Ram Navami"],["31 Mar","Tuesday","Good Friday"],["03 Apr","Friday","Mahavir Jayanti"],["14 Apr","Tuesday","Dr. B.R. Ambedkar Jayanti"],["01 May","Friday","Buddha Purnima"],["27 May","Wednesday","Eid-ul-Adha*"],["26 Jun","Friday","Moharram*"],["15 Aug","Saturday","Independence Day"],["26 Aug","Wednesday","Eid-e-Milad*"],["28 Aug","Friday","Raksha Bandhan"],["04 Sep","Friday","Janmashtami"],["02 Oct","Friday","Mahatma Gandhi Jayanti"],["20 Oct","Tuesday","Dussehra"],["08 Nov","Sunday","Deepawali"],["09 Nov","Monday","Govardhan Puja"],["11 Nov","Wednesday","Bhaiyya Dooj"],["24 Nov","Tuesday","Guru Nanak Jayanti"],["25 Dec","Friday","Christmas Day"]
] as const;
export const fees = [["Balvatika 1–3","₹7,100","₹500"],["Classes 1–2","₹8,800","₹500"],["Classes 3–5","₹8,800","₹500"],["Class 6","₹10,000","₹600"],["Class 7","₹11,200","₹600"],["Class 8","₹12,400","₹600"],["Classes 9–12","Proposed","Proposed"]] as const;
