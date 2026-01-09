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
  try {
    const popularBarbershop = await prisma.barbershop.findMany({
      orderBy: {
        name: "desc",
      },
    });
    return popularBarbershop;
  } catch (error) {
    console.error("error popular barbershop", error);
    return [];
  }
};

export const getBarbershopsById = async (id: string) => {
  const barbershop = await prisma.barbershop.findUnique({
    where: { id },
    include: {
      services: true,
    },
  });
  return barbershop;
};

export const getBarbershopsByServiceName = async (serviceName: string) => {
  try {
    const barbershops = await prisma.barbershop.findMany({
      where: {
        services: {
          some: {
            name: {
              contains: serviceName,
              mode: "insensitive",
            },
          },
        },
      },
      include: {
        services: true,
      },
    });
    return barbershops;
  } catch (error) {
    console.error("Error fetching barbershops by service name", error);
    return [];
  }
};
