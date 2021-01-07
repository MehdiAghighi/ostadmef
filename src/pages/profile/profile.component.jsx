import React from "react"
import ProfileNav from "../../components/profile-nav/profile-nav.component"
import { useEffect } from "react"
import { useAuthState } from "../../contexts/auth-context"
import CustomLoader from "../../components/custom-loader/custom-loader.component"
import { Route } from "react-router-dom"
import ProfileAccount from "./account/account.component"
import ProfileCourses from "./courses/courses.component"
import ProfileWallet from "./wallet/wallet.component"
import ProfileCampaign from "./campaign/campaign.component"
import ProfileInvite from "./invite/invite.component"
import { Helmet } from "react-helmet"

function Profile() {
  const { user } = useAuthState()

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>پروفایل کاربری | لینوم</title>
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_URL}/profile/courses`}
        />
        <meta
          name="description"
          content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
        />
      </Helmet>
      <div className="mt-16">
        {!user ? (
          <CustomLoader />
        ) : (
          <div className="flex md:flex-row flex-col items-start">
            <ProfileNav user={user} />
            <div className="md:w-8/12 w-full">
              <div className="md:px-3 md:py-0 py-3">
                <Route
                  exact
                  path="/profile"
                  render={(props) => <ProfileAccount {...props} />}
                />
                <Route
                  exact
                  path="/profile/courses"
                  render={(props) => <ProfileCourses {...props} />}
                />
                <Route
                  exact
                  path="/profile/wallet"
                  render={(props) => <ProfileWallet {...props} />}
                />
                <Route
                  exact
                  path="/profile/campaign"
                  render={(props) => <ProfileCampaign {...props} />}
                />
                <Route
                  exact
                  path="/profile/invite"
                  render={(props) => <ProfileInvite {...props} />}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
