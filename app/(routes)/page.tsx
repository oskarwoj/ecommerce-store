import getBillboard from "@/actions/getBillboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const billboard = await getBillboard("3cb8fd64-1129-46f1-8829-2816d701105c");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export const revalidate = 0;

export default HomePage;
