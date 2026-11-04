import { z } from "zod";

/* 
Mudança nesse schema do zod, pelo visto o .optional() entra em conflito com
o contrato de interface do zod por permitir undefined, enquanto o contrato
permite apenas string ou null;

Solução proposta por IA;
limpa o valor recebido com .trim(), operador ternário para ver se depois de limpar
fica vazio, se ficar retorna null, se não retorna o valor;
*/
export const createCustomerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string()
    .transform(value => value.trim() === "" ? null : value).nullable()
});

export const updateCustomerSchema = createCustomerSchema.partial();