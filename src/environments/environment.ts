// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const baseUrl = 'http://localhost:3000/api/';

export const environment = {
  production: false,
  login: `${baseUrl}login`,
  signup: `${baseUrl}signup`,
  companies: `${baseUrl}companies`,
  companyusers: `${baseUrl}companyusers`,

  addproject: `${baseUrl}addproject`,
  addclient: `${baseUrl}addclient`,
  getclients: `${baseUrl}getclients`,
  getprojects: `${baseUrl}getprojects`,

  credentials: `${baseUrl}credentials`,

  projdescription: `${baseUrl}projdescription`,
  statusupdate: `${baseUrl}statusupdate/`,

  getprojbyid: `${baseUrl}getprojbyid/`,
  updateprojbyid: `${baseUrl}updateprojbyid/`,

  updatecompany: `${baseUrl}updatecompany`,
  getSingleCompany: `${baseUrl}getSingleCompany`,
  getclientbyid: `${baseUrl}getclientbyid/`,

  updateclientbyid: `${baseUrl}updateclientbyid/`,

  assignproj: `${baseUrl}assignproj/`,

  getAssignedProj: `${baseUrl}getAssignedProj/`,
  removeassign: `${baseUrl}removeassign`,
  totalusers: `${baseUrl}totalusers/`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
