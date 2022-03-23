import { rest } from "msw";

export const handlers = [
  rest.get("data.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "29fbd98b-4dc2-4635-803b-ec3a0b79eb86",
          stepId: "b44febf9-0b3d-4e08-9f90-f74375fb4d48",
          stepType: "trigger",
          path: "A",
        },
        {
          id: "911e5758-4e60-4584-a9ec-d30b505d4591",
          stepId: "a300f9c3-eb25-4d7f-afb3-fb3de9e237b6",
          stepType: "email",
          path: "A.B",
        },
        {
          id: "ab12a55b-4807-4446-b868-05940f68a262",
          stepId: "a6c11875-2346-41f9-be64-d87903a9baf8",
          stepType: "wait",
          path: "A.B.C",
        },
        {
          id: "098a6b6a-940d-4028-8999-6a7bb09c1236",
          stepId: "1f981a54-0a0c-4a0c-8c3d-1646ce63ed35",
          stepType: "split",
          path: "A.B.C.D",
        },
        {
          id: "f5a202b1-16af-4e2c-adce-498b1d8768e7",
          stepId: "19475b3e-63a3-40b2-be19-11ccb2a9f983",
          stepType: "split",
          path: "A.B.C.D.YES",
        },
        {
          id: "5537144e-21c6-4c5f-928c-2e219bc52572",
          stepId: "12a72da0-7a4e-4b3e-a8e6-6364b527f465",
          stepType: "email",
          path: "A.B.C.D.YES.YES",
        },
        {
          id: "96299884-2324-4835-9208-b59661328ea1",
          stepId: "a021a1da-cc84-4d32-aed5-1c8da9cd65d0",
          stepType: "wait",
          path: "A.B.C.D.YES.NO",
        },
        {
          id: "37ec8273-28b9-44ea-857c-c3a36754b777",
          stepId: "97484c86-d52f-429f-8a81-b027f9637b6b",
          stepType: "email",
          path: "A.B.C.D.YES.NO.F",
        },
        {
          id: "b9c461d6-072d-4f2e-9235-ec35f17f45c9",
          stepId: "956e8b07-892b-490a-a33d-b3af3c61f342",
          stepType: "email",
          path: "A.B.C.D.NO",
        },
      ])
    );
  }),
];
