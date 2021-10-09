import Profile, { ProfileTemplateProps } from 'templates/Profile';
import FormProfile from 'components/FormProfile';

export default function Me(props: ProfileTemplateProps) {
  return (
    <Profile {...props}>
      <FormProfile />
    </Profile>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
