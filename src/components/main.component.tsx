import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FeedContainerComponent } from './pages/feed-components/feed-container.component';
import { ForumContainerComponent } from './pages/forum-components/forum-container.component';
<<<<<<< HEAD
import PostQuestionComponent from './pages/PostQuestionComponent';
import PostAnswerComponent from './pages/PostAnswerComponent';
=======
import { LoginComponent } from './pages/login.component/login.component';
>>>>>>> b719dc5f84e2dc48e691bbd36957afba5a9c460b


export const MainComponent: React.FC = () => {
    return <div id="main-component">
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path="/">
                        <LoginComponent />
                    </Route>
                    <div>
                        {/* <NavBarComponent></NavBarComponent> */}
                        {/* <SideMenuComponent></SideMenuComponent> */}
                        <Route exact path="/feed">
                            <FeedContainerComponent />
                        </Route>
                        <Route exact path="/forum">
                            <ForumContainerComponent />
                        </Route>
                        <Route exact path="/question">
                            { <PostQuestionComponent /> }
                        </Route>
                        <Route exact path="/answer">
                            { <PostAnswerComponent />}
                        </Route>
                    </div>
                </Switch>
            </main>
        </BrowserRouter>
    </div>
}