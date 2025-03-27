"use client";

import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faUserTie,
  faChartLine,
  faCrown,
  faUsers,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Bmi from "./bmi";

type Service = {
  icon: ReactElement;
  title: string;
  description: string;
  slug: string;
};

const services: Service[] = [
  {
    icon: <FontAwesomeIcon icon={faLeaf} />,
    title: "Nutrition Guidance",
    description:
      "Guidance to help you optimize your nutrition for your fitness goals.",
    slug: "nutrition-guidance",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} />,
    title: "Expert Trainers",
    description:
      "Train with experts who guide you to achieve your fitness goals.",
    slug: "expert-trainers",
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} />,
    title: "Progress Tracking",
    description: "Track your fitness progress to stay motivated and on track.",
    slug: "progress-tracking",
  },
  {
    icon: <FontAwesomeIcon icon={faCrown} />,
    title: "Premium Membership",
    description: "Get exclusive perks with our premium membership options.",
    slug: "premium-membership",
  },
  {
    icon: <FontAwesomeIcon icon={faUsers} />,
    title: "Community Support",
    description:
      "Join a supportive community that motivates you to keep going.",
    slug: "community-support",
  },
  {
    icon: <FontAwesomeIcon icon={faDumbbell} />,
    title: "Next-Level Fitness Spaces",
    description:
      "Access state-of-the-art fitness spaces to take your training to the next level.",
    slug: "fitness-space",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The treatments here have transformed my life. I feel more balanced and energized than ever.",
    role: "Client",
  },
  {
    name: "Michael Chen",
    text: "Professional staff and excellent service. The Ayurvedic treatments are truly effective.",
    role: "Client",
  },
  {
    name: "Emma Davis",
    text: "A peaceful sanctuary for healing. I highly recommend their wellness programs.",
    role: "Client",
  },
];

export default function MembersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0 flex items-center justify-center text-center">
          <img
            src="/images/spotLightBg.jpg" // Spotlight image
            alt="no image was found"
            className="object-cover w-full h-full "
          />
        </div>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="h-full"
        >
          <SwiperSlide className="relative h-screen">
            <div className="absolute inset-0 bg-black/50 z-30" />
            <img
              src="/images/BodyBuilder1.png"
              alt="Ayurvedic Treatment"
              className="object-cover  h-full" // Adjusted to fill the container
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute inset-0 bg-black/50 z-30" />
            <img
              src="/images/BodyBuilder2.png"
              alt="Wellness Center"
              className="object-cover  h-full" // Adjusted to fill the container
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute inset-0 bg-black/50 z-30" />
            <img
              src="/images/BodyBuilder1.png"
              alt="Massage Therapy"
              className="object-cover h-full" // Adjusted to fill the container
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Welcome to Fit-Track Fitness
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Discover your potential
            </p>
            <Link
              to="/membership-form"
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-red-800 hover:text-white transition-colors"
            >
              Join With Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 pb-30 bg-black ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-6xl font-extrabold text-red-600 mb-6">
              Discover
            </h2>
            <h2 className="text-6xl font-extrabold text-red-600 mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-red-800 text-lg">
              At FitnessFitrack, we are committed to empowering individuals to
              achieve their fitness goals in a supportive and motivating
              environment. Our state-of-the-art facility is designed for all
              fitness levels, featuring modern equipment, expert trainers, and
              personalized programs tailored to individual needs.
            </p>
          </motion.div>
          <div className="flex items-center justify-center mt-20">
            <div className="w-4/5 bg-[#171813] rounded-2xl shadow-xl">
              {/* Content inside the box */}
              <div className="flex flex-col md:flex-row items-center justify-between p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-center md:text-left w-full">
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon
                      icon={faLeaf}
                      className="text-red-600 text-3xl"
                    />
                    <span className="text-lg text-white">
                      Nutrition Guidance
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon
                      icon={faUserTie}
                      className="text-red-600 text-3xl"
                    />
                    <span className="text-lg text-white">Expert Trainers</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="text-red-600 text-3xl"
                    />
                    <span className="text-lg text-white">
                      Progress Tracking
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon
                      icon={faCrown}
                      className="text-red-600 text-3xl"
                    />
                    <span className="text-lg text-white">
                      Premium Membership
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="text-red-600 text-3xl"
                    />
                    <span className="text-lg text-white">
                      Community Support
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon
                      icon={faDumbbell}
                      className="text-red-600 text-3xl"
                    />
                    <span className="text-lg text-white">
                      Next-Level Fitness Spaces
                    </span>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 md:ml-16 w-full md:w-1/2">
                  <img
                    alt="Muscular man lifting weights, showcasing fitness and strength"
                    className="rounded-lg mx-auto "
                    height="600"
                    src="/images/BodyBuilder2.png"
                    width="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-extrabold text-center text-red-600 ">
            Train Smarter
          </h2>
          <h2 className="text-6xl font-extrabold text-center text-red-600 mb-16">
            Unleash Your Potential
          </h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              type: "bullets", // Simplified pagination
            }}
            className="h-full"
          >
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                className="bg-black border-2 border-red-800 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-grow"
                >
                  <div className="text-red-600 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl text-red-600 font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-red-800">{service.description}</p>
                </motion.div>
                {/* See More Button */}
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 self-center ml-70 "
                >
                  See More
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-20 bg-black flex items-center justify-center min-h-screen">
        {/* Bmi Section */}
        <Bmi />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-extrabold text-center text-red-600 ">
            Your Success
          </h2>
          <h2 className="text-6xl font-extrabold text-center text-red-600  mb-16">
            Stories, Our Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#171813] p-8 rounded-lg"
              >
                <p className="text-white mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-red-600 mb-6">
              Ready to Begin Your Fitness Journey?
            </h2>
            <p className="text-lg text-red-800 mb-8">
              Join A Vibrant Community For Fuel Motivation, Engagement Drives
              Progress, And Transformation.
            </p>
            <Link
              to="#"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
