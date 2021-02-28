/* Generated by restful-react */

import React from "react";
import { Get, GetProps, useGet, UseGetProps } from "restful-react";
export const SPEC_VERSION = "undefined"; 
export interface Course {
  pid: string;
  title: string;
  dateStart: string;
  subject: string;
  code: string;
}

export interface CourseDetails {
  pid: string;
  title: string;
  dateStart: string;
  description: string;
  credits: {
  chosen: string;
  value: string;
  credits: {
  max: string;
  min: string;
};
};
  /**
   * Abbriviation of the subject of the course.
   */
  subject: string;
  /**
   * The code portion of the course.
   */
  code: string;
  /**
   * If a course was named something else previously.
   */
  formally?: string;
}

export type LevelType = "law" | "undergraduate" | "graduate";

export type SectionType = "lecture" | "lab" | "tutorial";

export interface MeetingTimes {
  type: string;
  time: string;
  days: string;
  where: string;
  dateRange: string;
  scheduleType: string;
  instructors: string[];
}

export interface ClassScheduleListing {
  crn: string;
  sectionCode: string;
  additionalNotes?: string;
  associatedTerm: {
  end: string;
  start: string;
};
  registrationDates: {
  end: string;
  start: string;
};
  levels: LevelType[];
  campus: "online" | "in-person";
  sectionType: SectionType;
  instructionalMethod: string;
  credits: string;
  meetingTimes: MeetingTimes[];
}

export type Section = ClassScheduleListing;

export type Term = "202001" | "202005" | "202009" | "202101" | "202105";

export interface Seating {
  capacity: number;
  actual: number;
  remaining: number;
}

export type Classification = "YEAR_1" | "YEAR_2" | "YEAR_3" | "YEAR_4" | "YEAR_5";

export interface Requirements {
  level: LevelType[];
  fieldOfStudy?: string[];
  classification?: Classification[];
}

export interface Seat {
  seats: Seating;
  waitListSeats: Seating;
  requirements?: Requirements;
  crn: string;
}

export type GetAllCoursesProps = Omit<GetProps<Course[], unknown, void, void>, "path">;

/**
 * Retrieves all the courses available. If query params are passed in, they will be used to filter results.
 */
export const GetAllCourses = (props: GetAllCoursesProps) => (
  <Get<Course[], unknown, void, void>
    path={`/courses`}
    
    {...props}
  />
);

export type UseGetAllCoursesProps = Omit<UseGetProps<Course[], unknown, void, void>, "path">;

/**
 * Retrieves all the courses available. If query params are passed in, they will be used to filter results.
 */
export const useGetAllCourses = (props: UseGetAllCoursesProps) => useGet<Course[], unknown, void, void>(`/courses`, props);


export interface GetCoursePathParams {
  pid: string
}

export type GetCourseProps = Omit<GetProps<CourseDetails, unknown, void, GetCoursePathParams>, "path"> & GetCoursePathParams;

export const GetCourse = ({pid, ...props}: GetCourseProps) => (
  <Get<CourseDetails, unknown, void, GetCoursePathParams>
    path={`/courses/${pid}`}
    
    {...props}
  />
);

export type UseGetCourseProps = Omit<UseGetProps<CourseDetails, unknown, void, GetCoursePathParams>, "path"> & GetCoursePathParams;

export const useGetCourse = ({pid, ...props}: UseGetCourseProps) => useGet<CourseDetails, unknown, void, GetCoursePathParams>((paramsInPath: GetCoursePathParams) => `/courses/${paramsInPath.pid}`, {  pathParams: { pid }, ...props });


export interface SectionsQueryParams {
  subject: string;
  code: string;
}

export interface SectionsPathParams {
  term: Term
}

export type SectionsProps = Omit<GetProps<Section[], void, SectionsQueryParams, SectionsPathParams>, "path"> & SectionsPathParams;

export const Sections = ({term, ...props}: SectionsProps) => (
  <Get<Section[], void, SectionsQueryParams, SectionsPathParams>
    path={`/sections/${term}`}
    
    {...props}
  />
);

export type UseSectionsProps = Omit<UseGetProps<Section[], void, SectionsQueryParams, SectionsPathParams>, "path"> & SectionsPathParams;

export const useSections = ({term, ...props}: UseSectionsProps) => useGet<Section[], void, SectionsQueryParams, SectionsPathParams>((paramsInPath: SectionsPathParams) => `/sections/${paramsInPath.term}`, {  pathParams: { term }, ...props });


export interface SeatsQueryParams {
  subject: string;
  code: string;
}

export interface SeatsPathParams {
  term: Term
}

export type SeatsProps = Omit<GetProps<Seat[], void, SeatsQueryParams, SeatsPathParams>, "path"> & SeatsPathParams;

export const Seats = ({term, ...props}: SeatsProps) => (
  <Get<Seat[], void, SeatsQueryParams, SeatsPathParams>
    path={`/sections/${term}/seats`}
    
    {...props}
  />
);

export type UseSeatsProps = Omit<UseGetProps<Seat[], void, SeatsQueryParams, SeatsPathParams>, "path"> & SeatsPathParams;

export const useSeats = ({term, ...props}: UseSeatsProps) => useGet<Seat[], void, SeatsQueryParams, SeatsPathParams>((paramsInPath: SeatsPathParams) => `/sections/${paramsInPath.term}/seats`, {  pathParams: { term }, ...props });
