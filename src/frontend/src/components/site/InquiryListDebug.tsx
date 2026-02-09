import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import { useInquiryList } from '@/hooks/useInquiryList';
import { getServiceInterestLabel } from '@/lib/serviceInterest';

export function InquiryListDebug() {
  const [isOpen, setIsOpen] = useState(false);
  const { inquiries, isLoading, error } = useInquiryList(isOpen);

  // Production guard - should never render in production
  if (!import.meta.env.DEV) {
    return null;
  }

  return (
    <div className="mt-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <Card>
          <CardHeader>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 hover:bg-transparent">
                <CardTitle className="text-base">View Submitted Inquiries (Testing)</CardTitle>
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
          </CardHeader>
          <CollapsibleContent>
            <CardContent>
              {isLoading && (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              )}

              {error && (
                <div className="text-sm text-destructive py-4">Failed to load inquiries: {error.message}</div>
              )}

              {!isLoading && !error && inquiries.length === 0 && (
                <div className="text-sm text-muted-foreground py-4 text-center">No inquiries submitted yet.</div>
              )}

              {!isLoading && !error && inquiries.length > 0 && (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inquiries.map((inquiry) => (
                        <TableRow key={inquiry.id.toString()}>
                          <TableCell className="font-mono text-xs">{inquiry.id.toString()}</TableCell>
                          <TableCell>{inquiry.name}</TableCell>
                          <TableCell className="text-sm">{inquiry.email}</TableCell>
                          <TableCell className="text-sm">{inquiry.phoneNumber}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="text-xs">
                              {getServiceInterestLabel(inquiry.serviceInterest)}
                            </Badge>
                          </TableCell>
                          <TableCell className="max-w-xs truncate text-sm">{inquiry.message}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
}
