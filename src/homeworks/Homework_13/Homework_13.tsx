import { BlogProvider } from "./context";
import BlogManagement from "./components/BlogManagement";
import { PageWrapper } from "./styles";

function Homework_13() {
  return (
    <PageWrapper>
      <BlogProvider>
        <BlogManagement />
      </BlogProvider>
    </PageWrapper>
  );
}

export default Homework_13;
