import { GetServerSidePropsContext } from 'next';

import { QueryProfileMe } from 'graphql/generated/QueryProfileMe';
import { QUERY_PROFILE_ME } from 'graphql/queries/profile';

import FormProfile, { FormProfileProps } from 'components/FormProfile';
import Profile from 'templates/Profile';

import { initializeApollo } from 'utils/apollo';
import protectedRoutes from 'utils/protected-routes';

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME,
    variables: { identifier: session?.id }
  });

  return {
    props: { session, username: data.user?.username, email: data.user?.email }
  };
}
