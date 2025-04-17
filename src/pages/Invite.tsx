
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Link as LinkIcon, Laptop, Gift as GiftIcon } from "lucide-react";
import { toast } from "sonner";

export default function Invite() {
  const inviteLink = "https://zhirao.ai/invite/u123456";
  
  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
    toast.success("邀请链接已复制到剪贴板");
  };
  
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">通过邀请朋友获得免费字数！</h1>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-medium mb-4">奖励</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 mb-1">如果您邀请 1 位朋友注册，</p>
                <p className="text-gray-700">您和您的朋友都将获得 <span className="text-blue-500 font-medium">300 字免费额度</span>。</p>
              </div>
              
              <div>
                <p className="text-gray-700 mb-1">如果您邀请 1 位朋友订阅我们的任何付费计划，</p>
                <p className="text-gray-700">您和您的朋友都将获得 <span className="text-blue-500 font-medium">1700 字免费额度</span>。</p>
              </div>
              
              <Button 
                className="w-40 mt-4 bg-green-500 hover:bg-green-600"
                onClick={copyInviteLink}
              >
                <Gift className="mr-2 h-4 w-4" />
                立即邀请
              </Button>
              
              <p className="text-gray-500 text-sm">您最多可以邀请 50 位朋友。</p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <LinkIcon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-medium mb-1">1. 发送邀请链接给您的朋友</h3>
              </div>
              <div className="flex flex-col items-center text-center relative">
                <div className="absolute left-0 right-0 top-6 h-px bg-dashed bg-gray-300 hidden md:block" style={{ backgroundImage: 'linear-gradient(to right, #ccc 60%, transparent 40%)', backgroundSize: '8px 1px' }} />
                <div className="bg-gray-100 p-3 rounded-full mb-3 z-10">
                  <Laptop className="h-6 w-6 text-gray-500" />
                </div>
                <h3 className="font-medium mb-1">2. 您的朋友通过您的链接注册或订阅</h3>
              </div>
              <div className="flex flex-col items-center text-center relative">
                <div className="absolute left-0 right-0 top-6 h-px bg-dashed bg-gray-300 hidden md:block" style={{ backgroundImage: 'linear-gradient(to right, #ccc 60%, transparent 40%)', backgroundSize: '8px 1px' }} />
                <div className="bg-orange-100 p-3 rounded-full mb-3 z-10">
                  <GiftIcon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-medium mb-1">3. 您和您的朋友会收到奖励字数</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-medium mb-4">状态</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700">已邀请注册人数：</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">已邀请订阅人数：</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">已获得字数：</span>
                <span className="font-medium">0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
