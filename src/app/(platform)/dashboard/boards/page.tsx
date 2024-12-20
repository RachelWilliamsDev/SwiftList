'use client';
import Wrapper from '@/components/global/wrapper/wrapper';
import MostPopularTemplates from './most-popular-templates/mostPopularTemplates';
import RecentlyViewed from './recently-viewed/recentlyViewed';
import Workspaces from './workspaces/workspaces';

const BoardsPage = () => {
  return (
    <Wrapper>
      <MostPopularTemplates />
      <RecentlyViewed />
      <Workspaces />
    </Wrapper>
  );
};
export default BoardsPage;
