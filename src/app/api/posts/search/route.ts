import { AxiosInstance } from '@/services/axios/axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('query');
  console.log(name);
  const response = await AxiosInstance().get(`/posts/search?query=${name}`);

  console.log(response);
  const { data } = response;
  return NextResponse.json({ ...data });
}
