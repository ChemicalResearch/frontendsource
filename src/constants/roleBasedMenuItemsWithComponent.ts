import { roles } from "../config/roles";

export const roleBasedMenuItemsWithComponent = [
  {
    name: "Home",
    roles: [
      roles.LAB_HEAD,
      roles.NTPC_ROLE,
      roles.SAMPLE_MANAGEMENT,
      roles.SUPER_ADMIN,
    ],
    to: "/",
  },
  {
    name: "Chemist action",
    roles: [roles.LAB_HEAD, roles.SUPER_ADMIN],
    to: "/chemist-action",
  },
  {
    name: "Create jrf",
    roles: [roles.SAMPLE_MANAGEMENT, roles.SUPER_ADMIN],
    to: "/create-jrf",
  },
  { name: "Final report", roles: [roles.SUPER_ADMIN], to: "/final-report" },
  {
    name: "Job creation",
    roles: [roles.SAMPLE_MANAGEMENT, roles.SUPER_ADMIN],
    to: "/job-creation",
  },
  {
    name: "Lab head assignment",
    roles: [roles.LAB_HEAD, roles.SUPER_ADMIN],
    to: "/lab-head-assignment",
  },
  {
    name: "Laboratory activity",
    roles: [roles.LAB_HEAD, roles.SUPER_ADMIN],
    to: "/lab-activity",
  },
  {
    name: "Referee",
    roles: [roles.NTPC_ROLE, roles.SUPER_ADMIN],
    to: "/referee",
  },
  {
    name: "Sample collection",
    roles: [roles.NTPC_ROLE, roles.SAMPLE_MANAGEMENT, roles.SUPER_ADMIN],
    to: "/sample-collection",
  },
  {
    name: "Sample prep and qr assignment",
    roles: [roles.SAMPLE_MANAGEMENT, roles.SUPER_ADMIN],
    to: "/assign-qr-code",
  },
  {
    name: "Test progress",
    roles: [roles.LAB_HEAD, roles.SUPER_ADMIN],
    to: "/test-progress",
  },
  {
    name: "Tm entry at plant",
    roles: [roles.SAMPLE_MANAGEMENT, roles.SUPER_ADMIN],
    to: "/tm-entry-at-plant",
  },
  { name: "Validate data", roles: [roles.SUPER_ADMIN], to: "/validate-data" },
  {
    name: "Verification of test result",
    roles: [roles.LAB_HEAD, roles.SUPER_ADMIN],
    to: "/verification-of-test-result",
  },
  {
    name: "View jrf",
    roles: [roles.NTPC_ROLE, roles.SUPER_ADMIN],
    to: "/view-jrf",
  },
  {
    name: "View preparation",
    roles: [roles.NTPC_ROLE, roles.SUPER_ADMIN],
    to: "/view-preparation",
  },
];

export const menuRolesMap = roleBasedMenuItemsWithComponent.reduce<
  Record<string, Array<string>>
>((a, c) => ({ ...a, [c.name]: c.roles }), {});
