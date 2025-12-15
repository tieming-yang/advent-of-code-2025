from typing import Literal


print("-------------------------------------------------------")
print("------------------- new output ------------------------")
print("-------------------------------------------------------")
raw_input = "269194394-269335492,62371645-62509655,958929250-958994165,1336-3155,723925-849457,4416182-4470506,1775759815-1775887457,44422705-44477011,7612653647-7612728309,235784-396818,751-1236,20-36,4-14,9971242-10046246,8796089-8943190,34266-99164,2931385381-2931511480,277-640,894249-1083306,648255-713763,19167863-19202443,62-92,534463-598755,93-196,2276873-2559254,123712-212673,31261442-31408224,421375-503954,8383763979-8383947043,17194-32288,941928989-941964298,3416-9716"

test_input = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124"


def find_patterns(input):
    repeated = 0
    for pattern in input:
        start = int(pattern.split("-")[0])
        end = int(pattern.split("-")[1])

        for number in range(start, end + 1):
            full = str(number)

            chunk, times= repeating_chunk(full)
            if times > 1:
                repeated += number
    
           
    return repeated

def repeating_chunk(full: str) -> tuple[str, int] | tuple[None, Literal[0]]:
    n = len(full)
    for size in range(1, n // 2 + 1):
        if n % size != 0:
            continue

        chunk = full[:size]
        times = n // size
        if chunk * times == full:
            return chunk, times  # e.g., ("12", 2) for "1212", ("56", 3) for "565656"
    return None, 0

answer = find_patterns(raw_input.split(","))
# answer = find_patterns(test_input.split(","))
# answer = find_patterns(["565656-565657"])
print("----- answer -----")
print(answer)
# print(find_patterns(["38593856-38593862"]))
