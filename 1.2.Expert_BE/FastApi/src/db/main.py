from sqlalchemy.ext.asyncio import AsyncEngine
from sqlalchemy.orm import sessionmaker
from sqlmodel import SQLModel, create_engine, text
from sqlmodel.ext.asyncio.session import AsyncSession

from src.config import Config

engine = AsyncEngine(
    create_engine(
        url=Config.DATABASE_URL,
        echo=True
    )
)

async def init_db():
    async with engine.begin() as conn:
        from src.books.models import Book
        
        await conn.run_sync(SQLModel.metadata.create_all)