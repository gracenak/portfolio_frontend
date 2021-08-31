import { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchProjects } from "../actions/fetchProjects";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Project from "../components/Project";

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/projects/:id"
            render={(routerProps) => (
              <Project
                {...routerProps}
                projects={this.props.projects && this.props.projects}
              />
            )}
          />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blogs" component={Blogs} />
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchProjects();
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.projects,
  };
};

export default connect(mapStateToProps, { fetchProjects })(PortfolioContainer);
