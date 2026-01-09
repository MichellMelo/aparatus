"use client";

import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingSummaryProps {
  serviceName: string;
  servicePrice: number;
  barbershopName: string;
  date: Date;
  time: string;
}

export default function BookingSummary({
  serviceName,
  servicePrice,
  barbershopName,
  date,
  time,
}: BookingSummaryProps) {
  return (
    <div className="border-border bg-card flex flex-col gap-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">{serviceName}</h3>
        <span className="text-sm font-bold">
          {formatCurrency(servicePrice)}
        </span>
      </div>

      <div className="border-border space-y-2 border-t pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Barbershop:</span>
          <span className="font-medium">{barbershopName}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Data:</span>
          <span className="font-medium">
            {format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Horário:</span>
          <span className="font-medium">{time}</span>
        </div>
      </div>

      <div className="border-border border-t pt-4">
        <div className="flex justify-between">
          <span className="font-semibold">Total:</span>
          <span className="text-primary font-bold">
            {formatCurrency(servicePrice)}
          </span>
        </div>
      </div>
    </div>
  );
}
