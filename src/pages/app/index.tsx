import { Atletas } from '../../components/Atletas';
import { Colaboradores } from '../../components/Colaboradores';
import { Modalidades } from '../../components/Modalidades';
import { PageCorpo } from '../../components/PageCorpo';

export default function Dashboard() {
  return (
    <PageCorpo title='Dashbord'>
      <div className='w-full sm:w-1/2 xl:w-1/3'>
        <Modalidades />
      </div>
      <div className='w-full sm:w-1/2 xl:w-1/3'>
        <Colaboradores />
      </div>
      <div className='w-full sm:w-1/2 xl:w-1/3'>
        <Atletas />
      </div>
    </PageCorpo>
  );
}
