class Bus:
    def __init__(self, bus_id, max_capacity):
        self.bus_id = bus_id
        self.max_capacity = max_capacity
        self.current_count = 0

    def tap_card(self):
        if self.current_count < self.max_capacity:
            self.current_count += 1
            return "Entry allowed"
        else:
            return "Bus is full"

# Example Usage
bus = Bus(bus_id="001", max_capacity=50)

# Simulating card taps
for i in range(55):
    print(bus.tap_card())
