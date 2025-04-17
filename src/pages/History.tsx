
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function History() {
  const { t } = useLanguage();

  // Mock history data
  const historyItems = [
    {
      id: 1,
      content: "论文编辑要求：请返回干净版本和跟踪修订版本。请确保...",
      dateCreated: "2025-03-31 14:48",
      wordsGenerated: "521 字",
    },
    {
      id: 2,
      content: "我最早的记忆来源于自然机制的抽象概念...",
      dateCreated: "2025-03-30 13:38",
      wordsGenerated: "446 字",
    },
    {
      id: 3,
      content: "从小时候开始，我就被自然世界的奥秘所吸引...",
      dateCreated: "2025-03-28 19:59",
      wordsGenerated: "533 字",
    },
    {
      id: 4,
      content: "从小时候开始，我就被自然世界的奥秘所吸引...",
      dateCreated: "2025-03-28 19:58",
      wordsGenerated: "263 字",
    },
    {
      id: 5,
      content: "从小时候开始，我就被自然世界的奥秘所吸引...",
      dateCreated: "2025-03-28 19:55",
      wordsGenerated: "498 字",
    },
    {
      id: 6,
      content: "生活是一段充满挑战和机遇的旅程。每一天都带来新的...",
      dateCreated: "2025-03-28 13:04",
      wordsGenerated: "55 字",
    },
    {
      id: 7,
      content: "生活是一段充满挑战和机遇的旅程。每一天都带来新的...",
      dateCreated: "2025-03-28 12:42",
      wordsGenerated: "56 字",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">{t('dashboard.history')}</h1>
        
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">{t('dashboard.history.content')}</TableHead>
                <TableHead>{t('dashboard.history.created')}</TableHead>
                <TableHead>{t('dashboard.history.words')}</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historyItems.map((item) => (
                <TableRow key={item.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium truncate max-w-0">
                    {item.content}
                  </TableCell>
                  <TableCell>{item.dateCreated}</TableCell>
                  <TableCell>{item.wordsGenerated}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
}
