import DetailView from '@/components/pages/Detailpage/DetailView';

const page = async ({ params }: { params: { id: string } }) => {
  return <DetailView id={params.id} />;
};

export default page;
