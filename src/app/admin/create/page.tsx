import Breadcrumbs from "@/app/ui/shop/breadcrumbs";
import Form from "@/app/ui/admin/create-form";

export default function Page() {
    const breadcrumbs = [{
        label: 'Admin',
        href: '/admin',
    }, {
        label: 'Add Perfume',
        href: '/admin/create',
    }];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Form />
        </>
    );
}