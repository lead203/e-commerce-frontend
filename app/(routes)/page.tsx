import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billborad = await getBillboards('13226f84-0cf4-47b0-9e0b-2af5b552718a');

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billborad} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
}

export default HomePage;