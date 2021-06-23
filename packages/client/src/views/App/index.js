import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StickyContainer } from 'react-sticky';

import 'src/assets/scss/style.scss';

import { toggleTheme } from 'src/state/ducks/ui';

import Newsletter from 'src/components/Newsletter';
import Fallback from 'src/components/Fallback';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import withTitle from 'src/components/TitleComponent';
import Breadcrumb from 'src/components/Breadcrumb';
// import Setting from 'src/components/Setting';

// Pages components
const LayoutOne = lazy(() => import('../LayoutOne'));
const Blog = lazy(() => import('../Blog'));
const Candidate = lazy(() => import('../Candidate'));
const CandidatePage = lazy(() => import('../CandidatePage'));
const Employer = lazy(() => import('../Employer'));
const About = lazy(() => import('../About'));
const ContactUs = lazy(() => import('../ContactUs'));
const NotFound = lazy(() => import('../NotFound'));
const Pricing = lazy(() => import('../Pricing'));
const Company = lazy(() => import('../Company'));
const CompanyDetails = lazy(() => import('../CompanyDetails'));
const Job = lazy(() => import('../Job'));
const JobDetails = lazy(() => import('../JobDetails'));
const Signup = lazy(() => import('../SignUp'));
const Signin = lazy(() => import('../Signin'));

const App = () => {
  const breadcrumb = useSelector((store) => store.breadcrumb);
  const theme = useSelector((store) => store.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleTheme(theme));
  }, [theme]);
  return (
    <Router>
      <StickyContainer>
        <Header />
        {breadcrumb && <Breadcrumb title={breadcrumb} />}
        <Suspense fallback={<Fallback />}>
          <Switch>
            {/* Home page routes */}
            <Route
              exact
              path="/"
              render={(props) =>
                withTitle({
                  component: LayoutOne,
                  ...props,
                })
              }
            />
            <Route
              exact
              path="/contactus"
              render={(props) =>
                withTitle({
                  component: ContactUs,
                  title: 'Liên Hệ',
                  ...props,
                })
              }
            />

            <Route
              exact
              path="/about"
              render={(props) =>
                withTitle({
                  component: About,
                  title: 'Giới Thiệu',
                  ...props,
                })
              }
            />

            <Route
              exact
              path="/pricing"
              render={(props) =>
                withTitle({
                  component: Pricing,
                  title: 'Pricing Plan',
                  ...props,
                })
              }
            />

            <Route
              exact
              path="/company"
              render={(props) =>
                withTitle({
                  component: Company,
                  title: 'Company',
                  ...props,
                })
              }
            />

            <Route
              exact
              path="/hyosung-gongchae"
              render={(props) =>
                withTitle({
                  component: CompanyDetails,
                  title: 'Hyosung Gongchae',
                  ...props,
                })
              }
            />

            <Route
              exact
              path="/job"
              render={(props) =>
                withTitle({
                  component: Job,
                  title: 'Jobs',
                  ...props,
                })
              }
            />

            <Route
              exact
              path="/job/details"
              render={(props) =>
                withTitle({
                  component: JobDetails,
                  title: 'Job Details',
                  ...props,
                })
              }
            />

            <Route
              exact
              path="/signin"
              render={(props) =>
                withTitle({
                  component: Signin,
                  title: 'Login',
                  ...props,
                })
              }
            />

            <Route
              exact
              path="/candidate-page"
              render={(props) =>
                withTitle({
                  component: CandidatePage,
                  title: 'Đăng ký ứng tuyển',
                  ...props,
                })
              }
            />

            {/* Blog pages */}
            <Route path="/blog" component={Blog} />

            {/* Candidate pages */}
            <Route path="/candidate" component={Candidate} />

            {/* Candidate pages */}
            <Route path="/employer" component={Employer} />

            {/* Default 404 */}
            <Route
              render={(props) =>
                withTitle({
                  component: NotFound,
                  title: '404 Error',
                  ...props,
                })
              }
            />
          </Switch>
        </Suspense>
        <Newsletter />
        <Footer />
        {/* <Setting /> */}
      </StickyContainer>
    </Router>
  );
};

export default withRouter(App);
