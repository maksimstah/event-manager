import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { eventType } from './types';

const API_URL = 'https://66c98b018a477f50dc30ec28.mockapi.io/api';

export const eventApi = createApi({
  reducerPath: 'events',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Event'],
  endpoints: builder => ({
    getAllEvents: builder.query<eventType[], void>({
      query: () => `events`,
      providesTags: ['Event'],
    }),
    getEvent: builder.query<eventType, string>({
      query: id => `events/${id}`,
      providesTags: [{ type: 'Event' }],
    }),
    updateEvent: builder.mutation<eventType, eventType & { id: string }>({
      query: ({ id, ...patch }) => ({
        url: `events/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['Event'],
    }),
    createEvent: builder.mutation<Partial<eventType>, Partial<eventType>>({
      query: newEvent => ({
        url: `events`,
        method: 'POST',
        body: newEvent,
      }),
      invalidatesTags: ['Event'],
    }),
    deleteEvent: builder.mutation<void, string>({
      query: id => ({
        url: `events/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Event'],
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetEventQuery,
  useUpdateEventMutation,
  useCreateEventMutation,
  useDeleteEventMutation,
} = eventApi;
