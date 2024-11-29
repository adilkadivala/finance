import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  data?: {
    date: string;
    income: number;
    expences: number;
  }[];
};

export const Chart = ({ data = [] }: Props) => {
  return <Card className="border-none drop-shadow-sm ">
    <CardContent></CardContent>
  </Card>;
};
