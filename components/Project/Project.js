import React from 'react';
import {View, Text} from 'react-native';
import {faded_secondary, project_color} from '../Common/palette';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import moment from 'moment';
import {
  faClock,
  faCheck,
  faSearch,
  faWrench,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons';
import {
  project_container,
  project_info,
  project_title,
  project_time,
  success_text,
  failure_text,
  normal_text,
  icon_text
} from './ProjectStyles';

function Project({ project}) {
  const project_icons = {
    in_progress: (
      <Text style={icon_text}>
        <FontAwesomeIcon icon={faClock} /> In Progress
      </Text>
    ),
    finished: (
      <Text style={icon_text}>
        <FontAwesomeIcon icon={faCheck} /> Finished
      </Text>
    ),
    searching_a_group: (
      <Text style={icon_text}>
        <FontAwesomeIcon icon={faSearch} /> Searching Group
      </Text>
    ),
    creating_group: (
      <Text style={icon_text}>
        <FontAwesomeIcon icon={faWrench} /> Creating Group
      </Text>
    ),
  };
  const color = project_color[project.status] || faded_secondary;
  return (
    <View
      style={{
        ...project_container,
        shadowColor: color,
        backgroundColor: color,
      }}>
      <View style={project_info}>
        <Text style={project_title}>
          {(project?.project?.slug?.includes('piscine-') &&
            project?.project?.slug?.trim()) ||
            project?.project?.name.trim()}
        </Text>
        <Text style={project_time}>
          {moment.utc(project.created_at).local().startOf('seconds').fromNow()}
        </Text>
        {project_icons[project.status]}
        {(project.final_mark &&
          project['validated?'] === true &&
          project.marked && (
            <Text style={success_text}>
              <FontAwesomeIcon icon={faClipboard} /> {project.final_mark}
            </Text>
          )) ||
          (project['validated?'] === false && project.marked && (
            <Text style={failure_text}>
              <FontAwesomeIcon icon={faClipboard} /> 0
            </Text>
          )) || (
            <Text
              style={normal_text}>
              <FontAwesomeIcon icon={faClipboard} /> -
            </Text>
          )}
        <Text
          style={{...normal_text,fontWeight: 'normal'}}>
          {(!project.occurrence && `1 Attempt`) ||
            (project.occurrence > 1 && `${project.occurrence} Attempts`)}
        </Text>
      </View>
    </View>
  );
}

export default Project;
