import {
  AvailabilityType,
  CreateEventPayloadType,
  CreateMeetingType,
  GetAllIntegrationResponseType,
  LoginResponseType,
  loginType,
  PeriodType,
  PublicAvailabilityEventResponseType,
  PublicEventResponseType,
  PublicSingleEventDetailResponseType,
  registerType,
  ToggleEventVisibilityResponseType,
  UserAvailabilityResponseType,
  UserEventListResponse,
  UserMeetingsResponseType,
} from "@/types/api.type";
import { API, PublicAPI } from "./axios-client";
import { IntegrationAppType, VideoConferencingPlatform } from "./types";
import { AxiosError } from 'axios'; // Import AxiosError type


export const loginMutationFn = async (
  data: loginType
): Promise<LoginResponseType> => {
  const response = await API.post("/auth/login", data);
  return response.data;
};

export const registerMutationFn = async (data: registerType) =>
  await API.post("/auth/register", data);

//*********** */ EVENT APIS
export const CreateEventMutationFn = async (data: CreateEventPayloadType) =>
  await API.post("/event/create", data);

export const toggleEventVisibilityMutationFn = async (data: {
  eventId: string;
}): Promise<ToggleEventVisibilityResponseType> => {
  const response = await API.put("/event/toggle-privacy", data);
  return response.data;
};

export const geteventListQueryFn = async (): Promise<UserEventListResponse> => {
  const response = await API.get(`/event/all`);
  return response.data;
};

//*********** */ INTEGRATION APIS

export const checkIntegrationQueryFn = async (
  appType: VideoConferencingPlatform
) => {
  const response = await API.get(`integration/check/${appType}`);
  return response.data;
};

export const getAllIntegrationQueryFn =
  async (): Promise<GetAllIntegrationResponseType> => {
    const response = await API.get(`integration/all`);
    return response.data;
  };

export const connectAppIntegrationQueryFn = async (
  appType: IntegrationAppType
) => {
  const response = await API.get(`integration/connect/${appType}`);
  return response.data;
};

//*********** */ Availability APIS

export const getUserAvailabilityQueryFn =
  async (): Promise<UserAvailabilityResponseType> => {
    const response = await API.get(`/availability/me`);
    return response.data;
  };

export const updateUserAvailabilityMutationFn = async (
  data: AvailabilityType
) => {
  const response = await API.put("/availability/update", data);
  return response.data;
};

//*********** */ Meeting APIS



export const getUserMeetingsQueryFn = async (
  filter: PeriodType
): Promise<UserMeetingsResponseType | null> => {
  try {
    const response = await API.get(
      `/meeting/user/all${filter ? `?filter=${filter}` : ""}`
    );
    return response.data;
  } catch (error: unknown) {
    // Enhanced error handling with more logs
    if (error instanceof AxiosError) {
      // If it's an AxiosError, we can safely access error.response
      console.error('API error response:', error.response?.data);

      // Additional logging for debugging
      if (error.response) {
        console.log(`Error Status: ${error.response.status}`);
        console.log(`Error Headers:`, error.response.headers);
      } else {
        console.error('Error with the response object:', error);
      }

    } else if (error instanceof Error) {
      // If it's a generic JavaScript Error (non-Axios), access error.message
      console.error('Error:', error.message);
    } else {
      // In case the error is some other unexpected type
      console.error('Unexpected error:', error);
    }

    // Return a fallback value or null if the request fails
    return null; // Or handle the error accordingly
  }
};


export const cancelMeetingMutationFn = async (meetingId: string) => {
  const response = await API.put(`/meeting/cancel/${meetingId}`, {});
  return response.data;
};

//*********** */ All EXTERNAL/PUBLIC APIS
export const getAllPublicEventQueryFn = async (
  username: string
): Promise<PublicEventResponseType> => {
  const response = await PublicAPI.get(`/event/public/${username}`);
  return response.data;
};

export const getSinglePublicEventBySlugQueryFn = async (data: {
  username: string;
  slug: string;
}): Promise<PublicSingleEventDetailResponseType> => {
  const response = await PublicAPI.get(
    `/event/public/${data.username}/${data.slug}`
  );
  return response.data;
};

export const getPublicAvailabilityByEventIdQueryFn = async (
  eventId: string,
  timezone?: string
): Promise<PublicAvailabilityEventResponseType> => {
  const response = await PublicAPI.get(
    `/availability/public/${eventId}${timezone ? `?timezone=${timezone}` : ""}`
  );
  return response.data;
};

//Create Meeting Eventid
export const scheduleMeetingMutationFn = async (data: CreateMeetingType) => {
  const response = await API.post("/meeting/public/create", data);
  return response.data;
};
