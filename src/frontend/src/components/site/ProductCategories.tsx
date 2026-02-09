import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const categories = [
  {
    title: 'CCTV Equipment',
    items: ['IP Cameras', 'Analog Cameras', 'DVR Systems', 'NVR Systems', 'PTZ Cameras', 'Monitoring Displays'],
  },
  {
    title: 'Networking Hardware',
    items: ['Enterprise Routers', 'Managed Switches', 'Wireless Access Points', 'Network Cables', 'Patch Panels'],
  },
  {
    title: 'Laptops & Notebooks',
    items: ['Business Laptops', 'Gaming Laptops', 'Ultrabooks', 'Chromebooks', 'Laptop Accessories'],
  },
  {
    title: 'Desktop Systems',
    items: ['Office Desktops', 'Gaming PCs', 'All-in-One PCs', 'Mini PCs', 'Desktop Components'],
  },
  {
    title: 'Workstation Solutions',
    items: ['CAD Workstations', 'Video Editing Systems', 'Server Workstations', 'Professional Graphics Cards'],
  },
];

export function ProductCategories() {
  return (
    <div className="mt-16">
      <Separator className="mb-12" />
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Multibrand Product Categories</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We offer a comprehensive range of products from leading manufacturers to meet all your technology needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{category.title}</CardTitle>
              <CardDescription>
                <ul className="mt-3 space-y-1.5">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
