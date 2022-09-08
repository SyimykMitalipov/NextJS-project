import { Button, Htag  } from '../components/index';
import P from '../components/P/P';
export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Syimyk Mitalipov</Htag>
      <Button appearance='primary'>Syimyk Mitalipov</Button>
      <Button appearance='ghost' className='ssss'>Syimyk Mitalipov</Button>
      <P size='m'>Syimyk</P>
      <P size='s'>Syimyk</P>
      <P size='l'>Syimyk</P>
    </div>
  );
}
