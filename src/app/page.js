
import CarouselComponent from "@/components/causels/CaroselComponent";
import CardCourseContent from "@/components/card/CardCourseContent";
// import UseFullCarsorelComponent from "@/components/causels/UseFullCarsorelComponent";
import { Button } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <CarouselComponent />
     {/* <Button className="w-[1200px] m-10 bg-blue-950 ">Click me</Button> */}
     {/* <UseFullCarsorelComponent /> */}
    </>
  );
}
