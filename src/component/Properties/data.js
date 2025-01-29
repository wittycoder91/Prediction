import Property1 from "../../assets/images/property/1.jpg";
import Property2 from "../../assets/images/property/2.jpg";
import Property3 from "../../assets/images/property/3.jpg";
import Property4 from "../../assets/images/property/4.jpg";
import Property5 from "../../assets/images/property/5.jpg";
import Property6 from "../../assets/images/property/6.jpg";

import SubProperty1 from "../../assets/images/property/single/1.jpg";
import SubProperty2 from "../../assets/images/property/single/2.jpg";
import SubProperty3 from "../../assets/images/property/single/3.jpg";
import SubProperty4 from "../../assets/images/property/single/4.jpg";
import SubProperty5 from "../../assets/images/property/single/5.jpg";

import { FiBriefcase, FiHome, FiKey } from "react-icons/fi";
import { CgTrees } from "react-icons/cg";
import { BiShieldAlt2 } from "react-icons/bi";
import { GoRocket } from "react-icons/go";

export const properties = [
  {
    id: 1,
    image: Property1,
    name: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
    square: 8000,
    beds: 4,
    baths: 4,
    price: 5000,
    rating: 5.0,
    detail: [
      SubProperty1,
      SubProperty2,
      SubProperty3,
      SubProperty4,
      SubProperty5,
    ],
  },
  {
    id: 2,
    image: Property2,
    name: "59345 STONEWALL DR, Plaquemine, LA 70764, USA",
    square: 8000,
    beds: 4,
    baths: 4,
    price: 5000,
    rating: 5.0,
    detail: [
      SubProperty1,
      SubProperty2,
      SubProperty3,
      SubProperty4,
      SubProperty5,
    ],
  },
  {
    id: 3,
    image: Property3,
    name: "3723 SANDBAR DR, Addis, LA 70710, USA",
    square: 8000,
    beds: 4,
    baths: 4,
    price: 5000,
    rating: 5.0,
    detail: [
      SubProperty1,
      SubProperty2,
      SubProperty3,
      SubProperty4,
      SubProperty5,
    ],
  },
  {
    id: 4,
    image: Property4,
    name: "Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA",
    square: 8000,
    beds: 4,
    baths: 4,
    price: 5000,
    rating: 5.0,
    detail: [
      SubProperty1,
      SubProperty2,
      SubProperty3,
      SubProperty4,
      SubProperty5,
    ],
  },
  {
    id: 5,
    image: Property5,
    name: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA",
    square: 8000,
    beds: 4,
    baths: 4,
    price: 5000,
    rating: 5.0,
    detail: [
      SubProperty1,
      SubProperty2,
      SubProperty3,
      SubProperty4,
      SubProperty5,
    ],
  },
  {
    id: 6,
    image: Property6,
    name: "5133 MCLAIN WAY, Baton Rouge, LA 70809, USA",
    square: 8000,
    beds: 4,
    baths: 4,
    price: 5000,
    rating: 5.0,
    detail: [
      SubProperty1,
      SubProperty2,
      SubProperty3,
      SubProperty4,
      SubProperty5,
    ],
  },
];

export const featureData = [
  {
    icon: FiHome,
    title: "Evaluate Property",
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
  {
    icon: FiBriefcase,
    title: "Meeting with Agent",
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
  {
    icon: FiKey,
    title: "Close the Deal",
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
];
export const featureTwo = [
  {
    icon: "mdi mdi-cards-heart",
    title: "Comfortable",
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
  {
    icon: "mdi mdi-shield-sun",
    title: "Extra Security",
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
  {
    icon: "mdi mdi-star",
    title: "Luxury",
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
  {
    icon: "mdi mdi-currency-usd",
    title: "Best Price",
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
  {
    icon: "mdi mdi-map-marker",
    title: "Stratagic Location",
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
  {
    icon: "mdi mdi-chart-arc",
    title: "Efficient",
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
];

export const pricing = [
  {
    icon: CgTrees,
    title: "Basic",
    amount: "19",
    features: [
      "Full Access",
      "Source Files",
      "Free Appointments",
      "Enhanced Security",
    ],
  },
  {
    icon: BiShieldAlt2,
    title: "Premium",
    amount: "39",
    features: [
      "Full Access",
      "Source Files",
      "Free Appointments",
      "Enhanced Security",
    ],
  },
  {
    icon: GoRocket,
    title: "Business",
    amount: "99",
    features: [
      "Full Access",
      "Source Files",
      "Free Appointments",
      "Enhanced Security",
    ],
  },
];
export const accordionData = [
  {
    title: "How does it work ?",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    title: "Do I need a designer to use Hously ?",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    title: "What do I need to do to start selling ?",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    title: "What happens when I receive an order ?",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
];
