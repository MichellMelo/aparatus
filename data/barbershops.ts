import { prisma } from "@/lib/prisma";

const getBarbershops = async () => {
  try {
    const barbershop = await prisma.barbershop.findMany();
    return barbershop;
  } catch (error) {
    console.error("Error fetching barbershops", error);
    return [];
  }
};

export default getBarbershops;

export const getPopularBarbershops = async () => {
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
  return popularBarbershops;
};
