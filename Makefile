# Run development
all: dev

# Running unit test
test:
	@echo "Running unit test..."
	
	@npm test

# Run the application in development mode
dev:
	@echo "Run the application in development mode..."

	@npm run dev

start:
	@echo "Run the application in production mode..."

	@npm start