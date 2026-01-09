"use client";

import { useState, useEffect } from "react";

interface UseGetDateAvailableTimeSlotsProps {
  barbershopId: string;
  date: Date | undefined;
}

interface UseGetDateAvailableTimeSlotsResponse {
  data?: string[];
  isLoading: boolean;
  error?: string;
}

export function useGetDateAvailableTimeSlots({
  barbershopId,
  date,
}: UseGetDateAvailableTimeSlotsProps): UseGetDateAvailableTimeSlotsResponse {
  const [data, setData] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!date) {
      setData(undefined);
      return;
    }

    const fetchAvailableTimeSlots = async () => {
      setIsLoading(true);
      try {
        // Mock implementation - replace with actual API call
        const timeSlots = generateTimeSlots();
        setData(timeSlots);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Erro ao buscar horários",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchAvailableTimeSlots();
  }, [barbershopId, date]);

  return { data, isLoading, error };
}

function generateTimeSlots(): string[] {
  const slots: string[] = [];
  for (let hour = 9; hour < 18; hour++) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }
  return slots;
}
