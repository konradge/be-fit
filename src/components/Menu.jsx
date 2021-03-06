/**
 * Oberes Menu
 */
import React, { Component } from "react";
import { Dropdown, Menu as SemanticMenu } from "semantic-ui-react";
import { connect } from "react-redux";

import { setWorkout, addExercise } from "../actions";
import { getId } from "../helpers";
class Menu extends Component {
  state = { active: 0 };
  render() {
    const activeItem = this.props.location.pathname;
    return (
      <div className="top-fixed top-menu">
        <SemanticMenu secondary stackable>
          <SemanticMenu.Item>
            <span className="logo" />
          </SemanticMenu.Item>
          <SemanticMenu.Item
            active={activeItem === "/be-fit"}
            onClick={() => this.props.history.push("/be-fit/")}
          >
            <div>
              <i className="home icon"></i>Home
            </div>
          </SemanticMenu.Item>
          <Dropdown
            item
            icon={
              <div>
                <i className="fas fa-dumbbell"></i>Exercises
                <i className="caret down icon"></i>
              </div>
            }
          >
            <Dropdown.Menu>
              <div className="scrollable-menu">
                {[
                  <Dropdown.Item
                    key={-2}
                    onClick={() =>
                      this.props.history.push("/be-fit/exercise/search")
                    }
                  >
                    <i className="search icon"></i>Search
                  </Dropdown.Item>,
                  <Dropdown.Item
                    key={-1}
                    onClick={() => {
                      const idForNewExercise = getId(this.props.exercises);
                      this.props.addExercise("");
                      this.props.history.push(
                        "/be-fit/exercise/" + idForNewExercise
                      );
                    }}
                  >
                    <i className="plus icon"></i>Add exercise
                  </Dropdown.Item>,
                  <div className="ui divider" key={-3} />,
                  this.props.exercises.map(exercise => (
                    <Dropdown.Item
                      key={exercise.id}
                      active={activeItem === "/be-fit/exercise/" + exercise.id}
                      onClick={() =>
                        this.props.history.push(
                          "/be-fit/exercise/" + exercise.id
                        )
                      }
                    >
                      {exercise.name}
                    </Dropdown.Item>
                  ))
                ]}
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <SemanticMenu.Item
            active={activeItem === "/be-fit/wger"}
            onClick={() => this.props.history.push("/be-fit/wger")}
          >
            <div>
              <i className="fas fa-file-import"></i>Import exercises
            </div>
          </SemanticMenu.Item>
          <Dropdown
            item
            icon={
              <div>
                <i className="clipboard list icon"></i>Workouts
                <i className="caret down icon"></i>
              </div>
            }
          >
            <Dropdown.Menu>
              <div className="scrollable-menu">
                {[
                  this.props.workouts.map(workout => (
                    <Dropdown.Item
                      key={workout.id}
                      active={activeItem === "/be-fit/workout/" + workout.id}
                      onClick={() =>
                        this.props.history.push("/be-fit/workout/" + workout.id)
                      }
                    >
                      {workout.title}
                    </Dropdown.Item>
                  )),
                  <Dropdown.Item
                    key={-1}
                    onClick={() => {
                      this.props.setWorkout(null);
                      this.props.history.push("/be-fit/workout/-1");
                    }}
                  >
                    <i className="plus icon"></i>Add workout
                  </Dropdown.Item>
                ]}
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            item
            icon={
              <div>
                <i className="chart pie icon"></i>Overview
                <i className="caret down icon"></i>
              </div>
            }
          >
            <Dropdown.Menu>
              <Dropdown.Item
                active={activeItem === "/be-fit/overview#last-trainings"}
                onClick={() =>
                  this.props.history.push("/be-fit/overview#last-trainings")
                }
              >
                Last Trainings
              </Dropdown.Item>
              <Dropdown.Item
                active={activeItem === "/be-fit/overview#body-weight"}
                onClick={() =>
                  this.props.history.push("/be-fit/overview#body-weight")
                }
              >
                Body Weight
              </Dropdown.Item>
              <Dropdown.Item
                active={activeItem === "/be-fit/overview#statistics"}
                onClick={() =>
                  this.props.history.push("/be-fit/overview#statistics")
                }
              >
                Statistics
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <SemanticMenu.Item
            active={activeItem === "/be-fit/settings"}
            onClick={() => this.props.history.push("/be-fit/settings")}
          >
            <div>
              <i className="cogs icon"></i>Settings
            </div>
          </SemanticMenu.Item>
        </SemanticMenu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.userData.exercises,
    workouts: state.userData.workouts
  };
};

export default connect(mapStateToProps, { setWorkout, addExercise })(Menu);
